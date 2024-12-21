import { assertEquals } from "@std/assert";
import { helloWorld } from "./hello-world.ts";

Deno.test("helloWorld", () => {
  assertEquals(helloWorld(), "Hello World");
});
