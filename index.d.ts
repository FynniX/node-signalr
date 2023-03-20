/**
 * A signalR client for node.js which support ASP.net but not ASP.net Core.
 * For ASP.net Core signalR support use the offical client from Microsoft.
 */
declare class signalrClient {
    /**
     * @param {String} url
     * @param {string[]} hubs
     */
    constructor(url: string, hubs: string[]);
    url: string;
    qs: {};
    headers: {};
    agent: boolean;
    reconnectDelayTime: number;
    requestTimeout: number;
    callTimeout: number;
    connection: {
        state: number;
        hub: hub;
        lastMessageAt: number;
    };
    _bound: boolean;
    _websocket: any;
    _hubNames: string[];
    _invocationId: number;
    _callTimeout: number;
    _keepAliveTimeout: number;
    _keepAlive: boolean;
    _beatInterval: number;
    _beatTimer: number;
    _reconnectCount: number;
    _reconnectTimer: any;
    _receiveMessage(message: any): void;
    _sendMessage(hub: any, method: any, args: any): void;
    _negotiate(): any;
    _connect(): void;
    _reconnect(restart?: boolean): void;
    _clearReconnectTimer(): void;
    _beat(): void;
    _clearBeatTimer(): void;
    _markLastMessage(): void;
    _start(): any;
    _abort(): any;
    _error(code: any, ex?: any): void;
    _close(): void;
    start(): void;
    request: any;
    end(): void;
}
declare namespace errorCode {
    const invalidURL: string;
    const invalidProtocol: string;
    const noHub: string;
    const unsupportedWebsocket: string;
    const unauthorized: string;
    const connectLost: string;
    const negotiateError: string;
    const startError: string;
    const connectError: string;
    const socketError: string;
    const abortError: string;
}
export namespace connectionState {
    const connected: number;
    const reconnecting: number;
    const disconnected: number;
}
declare class hub {
    /**
     * @param {signalrClient} client
     */
    constructor(client: signalrClient);
    client: signalrClient;
    handlers: {};
    callbacks: {};
    _handleCallback(invocationId: any, error: any, result: any): void;
    /**
     * Binding events receive messages
     */
    on(hubName: any, methodName: any, cb: any): void;
    _processInvocationArgs(args: any): any[];
    /**
     * Call the hub method and get return values asynchronously
     */
    call(hubName: any, methodName: any): any;
    /**
     * Invoke the hub method without return values
     */
    invoke(hubName: any, methodName: any, ...args: any[]): void;
}
export { signalrClient as client, errorCode as error };
