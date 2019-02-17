import colors from './colors';

export const loginScreen = {
    container: {
        backgroundColor: colors.green,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export const banner = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 100 
    },

    image: {
        width: 80,
        height: 80
    },

    text: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 10,
        paddingTop: 10
    }
};

export const button = {
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        width: 270,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        flexDirection: "row"
    },

    icon: {
        width: 30,
        height: 30,
        paddingRight: 20
    },

    text: {
        color: "white",
        fontSize: 20,
    }
};

export const separator = {
    line: {
        backgroundColor: 'white',
        height: 0,
        width: 250,
        marginTop: 10,
        marginBottom: 10 
    }
};

export const home = {
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white"
    },

    totalTitle: {
        color: "black",
        fontSize: 25
    },

    totalMoney: {
        fontSize: 100,
        color: colors.lightgrey,
        paddingTop: 50
    },

    
};

export const moneyCategory = {
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grey
    },

    category: {
        color: "white",
        fontSize: 40
    },

    money: {
        color: colors.lightgrey,
        fontSize: 30
    }
};

export const purchasecard = {
    container: {
        backgroundColor: colors.grey,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 300,
        backgroundColor: "white"
    },

    date: {
        fontSize: 20,
        color: colors.green
    },
    
    price: {
        fontSize: 50,
        color: colors.green
    }

};
    
export const camera = {
    container: {
        width: "100%",
        height: "100%",
        
    },
    
    preview: {
        width: "100%",
        height: "100%"
    }
}
