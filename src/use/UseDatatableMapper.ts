export function MapAndGetData(objectMap: Array<object>, data: Array<object>): Array<object> {
    let rows: Array = [];
    data.map((item) => {
        let obj: object = item;
        let row: Array = [];
        for (let i: number = 0; i < objectMap.length; i++) {
            let mapKey: String = objectMap[i].key;
            let groupArray: Array = [];
            if (Array.isArray(mapKey)) {
                mapKey.map((group) => {
                    groupArray.push({ 
                        key: group.key,
                        value: obj[group.key],
                        component: group.component,
                    });
                });
                row.push({
                    value: groupArray,
                    component: objectMap[i].component,
                });
            } else {
                row.push({
                    key: obj.key,
                    value: obj[mapKey],
                    component: objectMap[i].component,
                });
            }
        }
        rows.push(row);
    });
    return rows;
}