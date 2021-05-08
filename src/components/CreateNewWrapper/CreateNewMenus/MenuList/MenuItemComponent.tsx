import React, {useState} from 'react'
import {ProductCategoriesMyItem} from "./DishItem/ProductCategoriesMyItem";
import {MenuItem, ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import styles from './MenuItemComponent.module.css'
import {FullscreenExitOutlined, FullscreenOutlined} from "@ant-design/icons";
import {ProductCategoriesMyItemBasket} from "./DishItem/ProductCategoriesMyItemBasket";

interface MenuItemComponentProps {
    Menuitem: MenuItem
    showAmount?: boolean
}

export interface ItemType<itemType> {
    category: string,
    items: Array<itemType>
}

export type ResArrayType = Array<ItemType<ProductCategoriesItem>>

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({Menuitem, showAmount}) => {
    let [hide, setHide] = useState(false)

    let product_categoriesItemsBasket = Menuitem.products.map((obj, index) =>
        <ProductCategoriesMyItemBasket key={index} keyVal={index}
                                 showAmount={showAmount} product_categoriesItem={obj}/>)
    const showMenuItem = Menuitem.products.some((obj) => obj.showAmount)

    let categoryIds: Array<string> = Menuitem.products.reduce((acum: Array<string>, cur) => {
        acum.push(cur.category.name as never)
        return acum
    },[])
    categoryIds = Array.from(new Set(categoryIds))


    const resArray = categoryIds.reduce((acum: ResArrayType, resItem) => {
        const items = Menuitem.products.filter((arrItem) => {
            return arrItem.category.name === resItem
        })
        acum.push({
            category: resItem,
            items: items
        })
        return acum
    }, [])

    console.log("resArray", resArray)



    return <div>

        {!showAmount && <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {Menuitem.name}
                    {Menuitem.type}
                </div>
                <div className={styles.hide}>
                    <label>{!hide ?
                        <FullscreenExitOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>
                        :
                        <FullscreenOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>}
                    </label>
                </div>
            </div>
            {!hide && <div className={styles.all_menu}>
                {
                    resArray.map((resArrayItem) => {
                        const items = resArrayItem.items.map((obj, index) => {
                            return <ProductCategoriesMyItem key={index} keyVal={index}
                                                     showAmount={showAmount} product_categoriesItem={obj}/>
                        })
                        return  <div>
                            {resArrayItem.category}
                            <div>{items}</div>
                        </div>
                    })
                }
            </div>}
        </div>}
        {showAmount && showMenuItem && <div>
            <div className={styles.name_basket}>
                {Menuitem.name}
            </div>
            <div className={styles.hide}>
                <label>{!hide ?
                    <FullscreenExitOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>
                    : <FullscreenOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>}</label>
            </div>
            {!hide && <div>
                {product_categoriesItemsBasket}
            </div>}
        </div>
        }
    </div>
}
