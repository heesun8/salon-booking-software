import React, { useEffect, useState } from 'react'

//Hook needed to get the key for the items on the menu lists
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== 'undefined'){ //this if statement is to make sure the page has been mounted on the client prior to accessing 'localStorage'
            const jsonValue = localStorage.getItem(key)
            if(jsonValue != null) return JSON.parse(jsonValue) as T
            // "as T" added above cos w/o there was a build error 
        }
        if (typeof initialValue === 'function') {
            return ( initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}