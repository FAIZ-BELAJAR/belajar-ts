export var customertype;
(function (customertype) {
    customertype["REGULAR"] = "REGULAR";
    customertype["GOLD"] = "GOLD";
    customertype["PLATINUM"] = "PLATINUM";
})(customertype || (customertype = {}));
export const customer = {
    nama: "faiz",
    type: customertype.GOLD
};
