export class JwtResponse {
    token: string;
    username: string;
    authorities: string[];
    isLogged: boolean;
}
