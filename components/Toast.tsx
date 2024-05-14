import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {Button} from "@/components/ui/button";

export default function Toast() {
    const { toast } = useToast()
    return(
        <>
            <Button
                onClick={() => {
                    toast({
                        title: "Cập nhật thành công",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                        ),
                    })
                }}
            >
                Cập nhật
            </Button>
        </>
    )
}