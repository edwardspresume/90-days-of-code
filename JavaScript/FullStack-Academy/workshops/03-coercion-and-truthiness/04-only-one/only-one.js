// YOUR CODE BELOW
const onlyOne = (var1, var2, var3) => {

    if (var1 || var2 || var3) return true;

    if (var1 && var2 && var3) return false;

    if (!var1 && !var2 && var3) return true;

    return false
}