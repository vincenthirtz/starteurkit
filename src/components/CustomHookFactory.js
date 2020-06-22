import { useState, useEffect } from "react";

export default (hookName, defaultValue) => {
    let subscribers = [];
    let value = defaultValue;

    const subscribe = action => {
        if (typeof action === "function") {
            subscribers.push(action);
        }
    };

    const unsubscribe = action => {
        subscribers = subscribers.filter(s => s !== action);
    };

    class CustomHook {}

    CustomHook[`set${hookName}`] = v => {
        value = v;
        subscribers.forEach(action => action(value));
    };

    CustomHook[`get${hookName}`] = () => value;

    CustomHook[`use${hookName}`] = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [currentValue, setCurrentValue] = useState(value);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const handleValueChange = v => {
                setCurrentValue(v);
            };
            subscribe(handleValueChange);
            return () => {
                unsubscribe(handleValueChange);
            };
        });
        return [currentValue, CustomHook[`set${hookName}`]];
    };
    return CustomHook;
    
};

