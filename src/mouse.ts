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
