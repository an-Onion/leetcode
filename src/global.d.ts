type JSONValue =
    | null
    | boolean
    | number
    | string
    | JSONValue[]
    | { [key: string]: JSONValue };

type Obj = Record<string, JSONValue> | Array<JSONValue>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = ( ...args: JSONValue[] ) => any;
