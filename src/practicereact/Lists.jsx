import PropTypes from 'prop-types';
function Lists(props){
        const category = props.category;
        const totalelements = props.items;
        // arraysi.sort((a,b) => a.name.localeCompare(b.name));
        // arraysi.sort((a,b) => b.name.localeCompare(a.name));
        // arraysi.sort((a,b) => (a.calories - b.calories));
        // arraysi.sort((a,b) => (b.calories - a.calories));
        const listItems = totalelements.map(item => <li key={item.id}>{item.name}:  <b>{item.calories}</b></li>);
        // const listitems = arraysi.map(temp => <li>{temp.calories}</li>)

    return (
        <ul>
            <h3>{category}</h3>
            {listItems}
        </ul>
    );
}
List.defaultProps = {
    category:"Category",
}
List.PropTypes ={
    category : PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              name: PropTypes.string,
                                              calories : PropTypes.number})),
}
export default Lists