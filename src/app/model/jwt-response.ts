export class JwtResponse {
    token: string;
    username: string;
    authorities: Array<{ authority: string}>;
    isLogged: boolean;
}
