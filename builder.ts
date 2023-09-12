
class Person {
    public name: string;
    public age: number;
    public gender: string;
    public weight: number;
    public height: number;

    constructor(name: string, gender: string, weight: number, height: number, age: number) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

}

class PersonBuilder {
    public name:any;
    public age:any;
    public gender:any;
    public weight:any;
    public height:any;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }

    public setAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }

    public setWeight(weight: number): PersonBuilder {
        this.weight = weight;
        return this;
    }
    
    public setHeight(height: number): PersonBuilder {
        this.height = height;
        return this;
    }
    
    public build(): Person {
        return new Person(this.name, this.gender, this.weight, this.height, this.age);
    }
    

    
}

const George = new PersonBuilder("George", "Male").setHeight(188).setWeight(80).setAge(21).build()
console.log(George)