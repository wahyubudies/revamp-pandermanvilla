const toCapitalize = (str) => {
    return str?.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const GeneralUtility = {
    toCapitalize
};

export default GeneralUtility;