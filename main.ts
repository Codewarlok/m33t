import { start } from "$fresh/server.ts";
import type { Manifest } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

// The generated `fresh.gen.ts` manifest can have module shapes that the
// compiler doesn't fully recognize. Cast to `unknown as Manifest` to keep
// type-checking strict for the server API while accepting the generated
// manifest. This is a minimal, local workaround — the generator may be
// updated in the future to produce a manifest that matches the exact
// `Manifest` type.
await start(manifest as unknown as Manifest, { plugins: [twindPlugin(twindConfig)] });
