const ListItem = ({route}) => {
    return (
        <div>
            <li className="w-full pl-3 pr-24 py-1 hover:bg-teal-700">{route.name}</li>
        </div>
    );
};

export default ListItem;