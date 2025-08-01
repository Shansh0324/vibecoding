"use server";
import { currentUser } from "@/features/auth/actions";
import { db } from "@/lib/db";
import { Templates } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createPlayground = async (data: {
    title: string;
    template: Templates;
    description?: string;
    userId: string;
}) => {
    const { template, title, description } = data;

    const user = await currentUser();

    if (!user || !user.id) {
        throw new Error("User not authenticated");
    }

    try {
        const playground = await db.playground.create({
            data: {
                title,
                template,
                description,
                userId: user?.id!,
            },
        });

        return playground;
    } catch (error) {
        console.error("Error creating playground:", error);
        return null;
    }
};

export const getAllPlaygroundForUser = async () => {
    const user = await currentUser();

    try {
        const playground = await db.playground.findMany({
            where: {
                userId: user?.id,
            },
            include: {
                user: true,
                Starmark: {
                    where: {
                        userId: user?.id,
                    },
                    select: {
                        isMarked: true,
                    }
                }
            }
        })
        return playground;
    }
    catch (error) {
        console.error("Error fetching playgrounds:", error);
        return null;
    }
};

export const deleteProjectById = async (id: string) => {
    try {
        await db.playground.delete({
            where: { id }
        })

        revalidatePath("/dashboard");
    } catch (error) {
        console.error(error);
    }
}

export const editProjectById = async (id: string, data: { title: string, description: string }) => {
    try {
        await db.playground.update({
            where: { id },
            data: data
        })
    } catch (error) {
        console.error(error);
    }
}

export const duplicateProjectById = async (id: string) => {
    try {
        const orignalPlayground = await db.playground.findUnique({
            where: { id }
        })

        if (!orignalPlayground) {
            throw new Error("Orignal Playground not found.");
        }

        const duplicatedPLayground = await db.playground.create({
            data: {
                title: `${orignalPlayground.title} (Copy)`,
                description: orignalPlayground.description,
                template: orignalPlayground.template,
                userId: orignalPlayground.userId,
            }
        })
        revalidatePath("/dashboard");
        return duplicatedPLayground;
    } catch (error) {
        console.error(error);
        return null;
    }
}