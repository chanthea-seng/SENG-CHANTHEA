"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ResumeSection from "@/components/ResumeSection";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  const handleToast = () => {
    toast.success("🚧 In Progress", {
      description: "Launch: Dec 27, 2025 at 9:00 AM",
      action: {
        label: "Notify Me",
        onClick: () => toast("We'll keep you posted!"),
      },
    });
  };

  const contacts = [
    { name: "Telegram", onClick: () => toast("Telegram clicked") },
    { name: "Email", onClick: () => toast("Email clicked") },
  ];

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center gap-10 bg-gray-50 dark:bg-black">
      <main className="flex flex-col gap-6 items-center w-full max-w-[90vw] sm:max-w-2xl">
        <h6 className="text-sm text-gray-500 dark:text-gray-400">
          Hello, I&apos;m
        </h6>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Seng Chanthea
        </motion.h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a DevOps Engineer.
        </p>

        <nav className="flex gap-6 flex-wrap justify-center mt-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                aria-label="Open Resume Sheet"
              >
                Resume
              </Button>
            </SheetTrigger>
            <SheetContent
              className="overflow-y-auto max-h-[100vh]"
              role="dialog"
            >
              <ResumeSection
                title="About Me"
                description="I’m Seng Chanthea, an IT student at RUPP focused on Java Spring Boot, microservices, and scalable backend systems. I’m eager to master Docker, Kubernetes, and CI/CD while advancing as a backend and DevOps engineer."
              />
              <ResumeSection
                title="Experience"
                description="Backend Developer - MOI (2025 - Present)"
              />
              <ResumeSection
                title="Education"
                description="RUPP — B.E. in IT Engineering (2022 - Present)"
              />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="button" variant="outline">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Drawer>
            <DrawerTrigger asChild>
              <Button
                type="button"
                variant="outline"
                aria-label="Open Project Drawer"
              >
                Project
              </Button>
            </DrawerTrigger>
            <DrawerContent className="overflow-y-auto max-h-[90vh]">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Ticket Gateway</DrawerTitle>
                  <DrawerDescription>
                    A platform to manage your ticketing microservices
                    infrastructure.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="flex-row justify-between items-center gap-2">
                  <Button type="button" variant="outline" onClick={handleToast}>
                    View
                  </Button>
                  <DrawerClose asChild>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                aria-label="Open Contact Dialog"
              >
                Contacts
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Contact Me</AlertDialogTitle>
                <AlertDialogDescription>
                  Choose how you&apos;d like to get in touch.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex justify-between items-center mt-6">
                <AlertDialogCancel asChild>
                  <Button type="button" variant="outline">
                    Close
                  </Button>
                </AlertDialogCancel>
                <div className="flex gap-2">
                  {contacts.map(({ name, onClick }) => (
                    <AlertDialogAction asChild key={name}>
                      <Button type="button" onClick={onClick}>
                        {name}
                      </Button>
                    </AlertDialogAction>
                  ))}
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </nav>
      </main>

      <footer className="text-sm text-gray-500 dark:text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Seng Chanthea. All rights reserved.
      </footer>
    </div>
  );
}
