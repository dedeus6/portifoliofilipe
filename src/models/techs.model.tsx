export interface Techs {
    linguagens: Tech[];
    backend: Tech[];
    frontend: Tech[];
    cicd: Tech[];
    pacotes: Tech[];
    database: Tech[];
    versionamento: Tech[];
    testes: Tech[];
}

export interface Tech {
    icon: string;
    name: string;
}