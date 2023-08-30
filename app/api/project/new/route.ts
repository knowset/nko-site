import { createPost } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {
        title,
        sub_title,
        start_of_the_implementation_period,
        end_of_the_implementation_period,
        source_of_financing,
        amount_of_the_subsidy,
        main_results,
        images,
    } = (await req.json()) as {
        title: string;
        sub_title: string;
        start_of_the_implementation_period: string;
        end_of_the_implementation_period: string;
        source_of_financing: string;
        amount_of_the_subsidy: string;
        main_results: string;
        images: {id: number, value: string}[];
    };

    const postOrError = await createPost("project", {
        title,
        sub_title,
        start_of_the_implementation_period,
        end_of_the_implementation_period,
        source_of_financing,
        amount_of_the_subsidy,
        main_results,
        images,
    });

    return NextResponse.json({ postOrError });
}
