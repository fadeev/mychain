import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdatePool } from "./types/dex/tx";
import { MsgCreatePool } from "./types/dex/tx";
import { MsgDeletePool } from "./types/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/mychain.dex.MsgUpdatePool", MsgUpdatePool],
    ["/mychain.dex.MsgCreatePool", MsgCreatePool],
    ["/mychain.dex.MsgDeletePool", MsgDeletePool],
    
];

export { msgTypes }