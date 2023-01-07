import { Upload, GetFileMetadata, Delete } from "../requestApplication/Builder";
import { Request } from "../requestApplication/request";
import { expect } from "chai";
import "mocha";

describe("Upload our file", function () {
  it("Upload file", async () => {
    const result = await new Request(new Upload()).sendRequest();
    const codeStatus = result.status;
    expect(codeStatus).to.equal(200);
  });
});

describe("Get metadata of our file", function () {
  it("Get metadata", async () => {
    const result = await new Request(new GetFileMetadata()).sendRequest();
    const codeStatus = result.status;
    expect(codeStatus).to.equal(200);
  });
});

describe("Delete our file", function () {
  it("Delete file", async () => {
    const result = await new Request(new Delete()).sendRequest();
    const codeStatus = result.status;
    expect(codeStatus).to.equal(200);
  });
});
