import axios, { AxiosResponse } from "axios";

abstract class RequestApp {
  public abstract setLink(): this;
  public abstract setHeaders(): this;
  public abstract setData(): void;
  public abstract get request(): object;
}

export class Request {
  private _builder: RequestApp;

  constructor(builder: RequestApp) {
    this._builder = builder;
  }

  build(): object {
    this._builder.setLink().setHeaders().setData();
    // console.log(this._builder.request);
    return this._builder.request;
  }

  sendRequest(): Promise<AxiosResponse> {
    return axios(this.build());
  }
}
