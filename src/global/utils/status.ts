export const status = [
    {
        id: 1,
        name: 'Novo',
        className: 'orderStatusApproved'
    },
    {
        id: 2,
        name: 'Em analise pelo antifraude',
        className: 'orderStatusWaiting'
    },
    {
        id: 3,
        name: 'Aprovado pelo antifraude',
        className: 'orderStatusApproved'
    },
    {
        id: 4,
        name: 'Negado pelo antifraude',
        className: 'orderStatusDenied'
    },
    {
        id: 5,
        name: 'Cancelado pelo antifraude',
        className: 'orderStatusDenied'
    },
    {
        id: 6,
        name: 'Aguardando analise do cockpit',
        className: 'orderStatusWaiting'
    },
    {
        id: 7,
        name: 'Em analise do cockpit',
        className: 'orderStatusWaiting'
    },
    {
        id: 8,
        name: 'Agendado',
        className: 'orderStatusWaiting'
    },
    {
        id: 9,
        name: 'Aprovado no cockpity',
        className: 'orderStatusApproved'
    },
    {
        id: 10,
        name: 'Negado pelo cockpity',
        className: 'orderStatusDenied'
    },
    {
        id: 11,
        name: 'Aprovado retornando para o provedor',
        className: 'orderStatusApproved'
    },
    {
        id: 12,
        name: 'Negado retornando para o provador',
        className: 'orderStatusDenied'
    },
    {
        id: 13,
        name: 'Cancelado pelo cliente',
        className: 'orderStatusDenied'
    },
];

export const CompareStatusId = (statusId: number) => {
    const findedStatus = status.find(statusInformation =>
            statusInformation.id === statusId
        );

    return findedStatus;
};
