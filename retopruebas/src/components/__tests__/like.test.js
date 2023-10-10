import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

// 1) Por defecto, muestra 0 likes
// 2) Cuando se hace click en like, el numero de likes sube 1
// 3) Cuando se hace click en dislike, el número de likes baja 1

test("0 likes by default", ()=>{
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("1 like when clicking like", ()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText('Like'))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})


test("-1 like when clicking like", ()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText('Dislike'))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})