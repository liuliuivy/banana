import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/items';

const itemsList = (props) => (
    <div>
        {props.items.map((item) => {
            return <div key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => {
                    props.deleteItem(item.id);
                }}>X</button>
            </div>
        })}
    </div>
)

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(itemsList);