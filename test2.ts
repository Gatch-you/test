import { lchown } from "fs";

class Male {
    private name: String;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(): string {
        console.log(`Monsieur ${this.name}`);
        return `Monsieur ${this.name}`
    }
}

class Female {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(this: Female): string {
        console.log(`Madame ${this.name}`);
        return `Madame ${this.name}`
    }
}


const male: Male = new Male("太郎");
          //↑この: Maleは何? なくても動く
const female: Female = new Female("花子");
          //↑この: Femaleは何?　なくても動く

male.toString();

female.toString();







