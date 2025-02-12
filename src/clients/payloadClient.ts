import { getPayload } from "payload";
import config from "@payload-config";

const payload = async () => getPayload({ config });

export default payload;
