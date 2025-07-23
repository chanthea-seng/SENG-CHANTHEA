"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

export default function Home() {
  const handleToast = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center gap-10 bg-gray-50 dark:bg-black">
      <main className="flex flex-col gap-6 items-center w-full max-w-2xl">
        <h6 className="text-sm text-gray-500 dark:text-gray-400">
          Hello, I&apos;m
        </h6>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          Seng Chanthea
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a DevOps Engineer.
        </p>

        <nav className="flex gap-6 flex-wrap justify-center mt-4">
          {/* Resume Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                aria-label="Open Resume Sheet"
                className="border-4 border-indigo-200 border-l-indigo-500"
              >
                Resume
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div>
                <SheetHeader>
                  <SheetTitle>About Me</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  {/* Add form fields here */}
                </div>
              </div>
              <div>
                <SheetHeader>
                  <SheetTitle>Experience</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  {/* Add form fields here */}
                </div>
              </div>
              <div>
                <SheetHeader>
                  <SheetTitle>Education</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  {/* Add form fields here */}
                </div>
              </div>

              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Project Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                aria-label="Open Project Drawer"
                className="border-4 border-indigo-200 border-y-indigo-500"
              >
                Project
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Ticket Getways</DrawerTitle>
                  <DrawerDescription>
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>

                <DrawerFooter>
                  <Button variant="outline" onClick={handleToast}>
                    View
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                aria-label="Open Alert Dialog"
                className="border-4 border-indigo-200 border-r-indigo-500 "
              >
                Contacts
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="flex">Close</AlertDialogCancel>
                <AlertDialogAction>Telegram</AlertDialogAction>
                <AlertDialogAction>Email</AlertDialogAction>
              </AlertDialogFooter>
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
