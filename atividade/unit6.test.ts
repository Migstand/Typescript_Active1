import {NintendoSwitch, Xbox} from './games';


test('Ligar 2 videogames e moves os personagens', () =>{
    let nin = new NintendoSwitch(0, 0);
    let xbox = new Xbox(0, 0);
    expect(
        nin.mover(1, 0)
    ).toBe("Mario Andou para direita"),
    expect(
        xbox.mover(0, 1)
    ).toBe("Masterchief Andou para cima");
})