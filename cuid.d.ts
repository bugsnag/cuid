declare module '@bugsnag/cuid' {
    export function fingerprint(): string
    export function isCuid(value: unknown): value is string

    export default function cuid(): string
}
