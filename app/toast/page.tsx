"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function ToastPage() {
    const { toast } = useToast()

    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Button
                    className="w-fit"
                    variant="outline"
                    onClick={() => {
                        toast({
                            title: "Scheduled: Catch up ",
                            description: "Friday, February 10, 2023 at 5:57 PM",
                            action: (
                                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                            ),
                        })
                    }}
                >
                    Add to calendar
                </Button>
            </div>
        </>
    )
}