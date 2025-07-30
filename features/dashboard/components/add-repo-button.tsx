"use client"
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import React from 'react'

const AddRepoButton = () => {
  return (
    <div className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
        transition-all duration-300 ease-in-out
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        ">
      <div className="flex flex-row justify-center items-start gap-4">
        <Button variant={"outline"}
          className="flex justify-center items-center bg-white group-hover:bg-[#fff8f8] transition-colors duration-300"
          size={"icon"}>
          <ArrowDown size={30} className="transition-transform duration-300 group-hover:rotate-90" />
        </Button>

        <div className="flex flex-col ">
          <h1 className="text-xl font-bold ">Open Github Repository</h1>
          <p className="text-sm text-muted-foreground max-w-[220px]">Work with our repositories in our editor</p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image src="/add-repo.svg" alt="Create new Playground" width={120} height={120} />
      </div>
    </div>
  )
}

export default AddRepoButton
