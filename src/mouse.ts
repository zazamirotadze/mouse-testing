class Mouse 
{
    name : string;
    surname : string;
    color : string;
    public constructor(name: string, surname: string, color: string)
    {
        this.name = name,
        this.surname = surname,
        this.color = color
    }
}

export default new Mouse("Mickey", "Mouse", "black");
const speedyGonzales = new Mouse("Speedy", "Gonzales", "brown");
const timothyQMouse = new Mouse("Timothy", "Q. Mouse", "brown");
const minnieMouse = new Mouse("Minnie", "Mouse", "black");
const geraldJinx = new Mouse("Gerald", "Jinx", "brown"); 
