import React, {useEffect, useState} from 'react'
import styles from './MenuList.module.css'
import {ItemType, MenuItemComponent} from "./MenuItemComponent";
import {MenuArray, MenuItem, ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import {Menu} from "antd";
import {ProductCategoriesMyItem} from "./DishItem/ProductCategoriesMyItem";
import {FullscreenExitOutlined, FullscreenOutlined} from "@ant-design/icons";
import {CheckForDeleted} from "../../../../common/compon/DeletedItems/DeletedItems";

interface MenuListProps {
    menus: MenuArray
    showAmount?: boolean
}

type ResArrayType = Array<ItemType<MenuItem>>

export const MenuList: React.FC<MenuListProps> = (props) => {
    const menus = props.menus?.map((curMenuItem: MenuItem, index) => {
        if (CheckForDeleted(curMenuItem)) return
        return <MenuItemComponent key={index} showAmount={props.showAmount} Menuitem={curMenuItem}/>
    })
    //const [hide, setHide] = useState(false)

    let categoryIds: Array<string> = props.menus.reduce((acum: Array<string>, cur) => {
        acum.push(cur.category.name as never)
        return acum
    }, [])

    categoryIds = Array.from(new Set(categoryIds))

    const resArray = categoryIds.reduce((acum: ResArrayType, resItem) => {
        const items = props.menus.filter((arrItem) => {
            return arrItem.category.name === resItem
        })
        acum.push({
            category: resItem,
            items: items
        })
        return acum
    }, [])

    return <div>
        {!props.showAmount && <div className={styles.name}>Меню</div>}
        {props.showAmount && <div className={styles.name}>Кошик</div>}

        {props.showAmount && <div>
            {menus}


        </div>}
        {!props.showAmount && <div className={styles.menus}>

            {
                resArray.map((resArrayItem, indexH) => {
                    const items = resArrayItem.items.map((obj, index) => {
                        if (CheckForDeleted(obj)) return
                        return <MenuItemComponent key={index}
                                                  Menuitem={obj}/>
                    })
                    return <div key={indexH} >
                        <h2 className={styles.category_name}>{resArrayItem.category}</h2>
                        <div className={styles.menu_category}>{items}</div>
                    </div>
                })
            }


        </div>}

    </div>
}
