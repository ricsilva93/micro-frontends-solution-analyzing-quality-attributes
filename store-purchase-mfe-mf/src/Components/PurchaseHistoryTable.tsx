import * as React from 'react';
import { Product } from '../Models/Product';
import { Purchase } from '../Models/Purchase';

import { Wrapper } from './PurchaseHistoryTable.styles';

export class PurchaseHistoryTable extends React.Component {

    public state = {
        purchases: [] as Purchase[],
    };

    async componentDidMount() {
        console.log("fire get purchase history");
        await fetch('http://localhost:30007/api/purchases')
            .then(async response => {
                console.log(response.body)
                const data = await response.json()
                this.setState({ purchases: data })
            })
            .catch(console.log);

    }

    private renderNoElements(): JSX.Element {
        return (
            <p className="text"><b>Your Purchase History is empty.</b></p>
        );
    }
    private renderTable(purchases: Purchase[]): JSX.Element {
        return (
            <Wrapper>
                {purchases.map((purchase: Purchase) => (
                    <div>
                        <table width='100%' cellSpacing={0} cellPadding={0}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan={4}><b>Payment Method:</b> {purchase.paymentMethod}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}><b>Total Price:</b> {purchase.totalPrice} $</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                {purchase.products.map((product: Product) => (
                                    <tr key={product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price} $</td>
                                        <td>{product.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                        </div>
                    </div>
                ))}

            </Wrapper>
        )
    }

    render() {

        return (
            <Wrapper>
                {
                    !this.state.purchases.length ?
                        this.renderNoElements() :

                        this.renderTable(this.state.purchases)
                }
            </Wrapper>


        );
    }
}



export default PurchaseHistoryTable;