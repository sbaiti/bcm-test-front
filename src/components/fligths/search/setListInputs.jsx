const setListInputs = (tripTypeList, disabled) => [
    {
        name: 'tripType',
        label: 'Trip Type',
        list: tripTypeList,
        isRadio: true,
        xs: 12,
        sm: 12,
        justify: "flex-start",
        alignItems: "center"
    },
    {
        name: 'departure_airport',
        label: 'Aéroport de départ',
        xs: 12,
        sm: 6,
        justify: "flex-start",
        alignItems: "center"
    },
    {
        name: 'arrival_airport',
        label: "Aéroport d'arrivée",
        xs: 12,
        sm: 6,
        justify: "flex-end",
        alignItems: "center"
    },
    {
        name: 'departure_date',
        label: 'Date de de départ',
        isDate: true,
        xs: 12,
        sm: 6,
        justify: "flex-start",
        alignItems: "center"
    },
    !disabled && {
        name: 'return_date',
        label: 'Date de retour',
        isDate: true,
        xs: 12,
        sm: 6,
        justify: "flex-end",
        alignItems: "center"
    }
]

export {
    setListInputs
}