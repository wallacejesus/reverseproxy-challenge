import { OkPacket } from "mysql2";

export interface People extends OkPacket {
    id: number | undefined;
    name: string;
}