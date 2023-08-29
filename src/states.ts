export const DefaultOrderContextState = {
    gameId: undefined as any as number,
    locationId: undefined as any as number,
    name: undefined as string | undefined,
    customDomainName: undefined as string | undefined,
    customDomainExt: undefined as any as string,
    variable: {} as { [i: string]: number | string | undefined },
};

export type OrderContextStateType = typeof DefaultOrderContextState;
