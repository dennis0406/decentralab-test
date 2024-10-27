import { glyphs } from "../Icons/Glyphs";

export interface UseGuide {
    id: number;
    icon: keyof typeof glyphs;
    title: string;
    desc: string;
}