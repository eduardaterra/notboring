// storage-adapter-import-placeholder
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { gcsStorage } from "@payloadcms/storage-gcs";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { LP } from "./collections/LP";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, LP, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI ?? "",
    },
  }),

  sharp,
  plugins: [
    gcsStorage({
      bucket: process.env.GCS_BUCKET ?? "",
      options: {
        projectId: process.env.GCS_PROJECT_ID ?? "",
      },
      collections: { media: true },
    }),
  ],
});
