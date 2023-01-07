abstract class BasicRequest {
  request: { [attr: string]: any };
  constructor() {
    this.request = {
      method: "post",
      url: "",
      headers: {
        Authorization:
          "Bearer sl.BWcyKrx32SLWCrXgSvCRv1r078wYZmxXt-HoWhA15K1YKQYKiZWqo6RTgwD-4VGeXQ_WRONHkbLe7rYSeCKRBNTm2aQ1H1sztnB3deOmrpZsObMlXvx_BVjQxY_gS0JNo2glr22VD2A",
      },
      data: {},
    };
  }
}

export class Upload extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://content.dropboxapi.com/2/files/upload";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/octet-stream";
    this.request.headers["Dropbox-API-Arg"] =
      '{"autorename":true,"mode":"add","mute":false,"path":"/Maliuk.png"}';
    return this;
  }

  setData(): void {
    this.request["data"]["binary"] = "../assets/Maliuk.png";
  }
}

export class GetFileMetadata extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://api.dropboxapi.com/2/files/get_metadata";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/json";
    return this;
  }

  setData(): void {
    this.request.data["path"] = "/Maliuk.png";
  }
}

export class Delete extends BasicRequest {
  constructor() {
    super();
  }

  setLink(): this {
    this.request.url = "https://api.dropboxapi.com/2/files/delete_v2   ";
    return this;
  }

  setHeaders(): this {
    this.request.headers["Content-Type"] = "application/json";
    return this;
  }

  setData(): void {
    this.request.data["path"] = "/Maliuk.png";
  }
}
