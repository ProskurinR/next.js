"use client";
import { Button } from "@/components/button/component";
import { useRouter } from "next/navigation";

export default function DishLayout({ children }) {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.back()} size="m">
        back
      </Button>
      {children}
    </div>
  );
}
