import { SearchBar } from "./SearchBar";

export const AppBar = () => {

    return (
        <div className="flex justify-between p-2">
            <div>Logo</div>
            <div><SearchBar /></div>
            <div>Sign In</div>
        </div>
    );
};