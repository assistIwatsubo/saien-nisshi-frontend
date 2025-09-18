import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/getAccessToken";
import { ScheduleEntry } from "@/types/schedule";

export async function GET() {
  try {
    const token = await getAccessToken();
    const res = await fetch(`http://localhost:8080/api/schedules/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return NextResponse.json([], { status: 500 });

    const schedules: ScheduleEntry[] = await res.json();
    return NextResponse.json(schedules);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
