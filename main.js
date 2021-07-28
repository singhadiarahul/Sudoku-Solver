function check()
{
    var start = 97;
    var end = 106;
    var flag = true;
    for (var i = start; i < end; i++)
    {
        var x = (String.fromCharCode(i)).toString();
        for (var j = start; j < end; j++)
        {
            var y = (String.fromCharCode(j)).toString();
            var z = (x.concat(y)).toString();
            var ele=document.getElementById(z.toString());
            var num = ele.value;
            if (num < 0 || num > 9)
            {
                ele.classList.add("wrong");
                ele.value='';
                flag = false;
            }
        }
    }
    return flag;
}

function input()
{
    var arr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var start = 97;
    var end = 106;
    for (var i = start; i < end; i++)
    {
        var x = (String.fromCharCode(i)).toString();
        for (var j = start; j < end; j++)
        {
            var y = (String.fromCharCode(j)).toString();
            var z = (x.concat(y)).toString();
            var num = document.getElementById(z.toString()).value;
            arr[i - 97][j - 97] = num;
        }
    }
    return arr;
}

function possible(arr, i, j, num)
{
    for (var k = 0; k < 9; k++)
    {
        if (arr[i][k] == num && k != j)
        {
            return false;
        }
        if (arr[k][j] == num && k != i)
        {
            return false;
        }
    }
    var x = i - i % 3;
    var y = j - j % 3;
    for (var p = 0; p < 3; p++)
    {
        for (var q = 0; q < 3; q++)
        {
            if (arr[x + p][y + q] == num && x + p != i && y + q != j)
            {
                return false;
            }
        }
    }
    return true;
}

function valid(arr)
{
    var flag=true;
    for (var i = 0; i < 9; i++)
    {
        for (var j = 0; j < 9; j++)
        {
            if (!possible(arr, i, j, arr[i][j])&&arr[i][j]!=0)
            {
                flag=false;
            }
        }
    }
    return flag;
}

function solve(arr)
{
    for (var i = 0; i < 9; i++)
    {
        for (var j = 0; j < 9; j++)
        {
            if (arr[i][j] == 0)
            {
                for (var c = 1; c <= 9; c++)
                {
                    if (possible(arr, i, j, c))
                    {
                        arr[i][j] = c;
                        if (solve(arr))
                        {
                            return true;
                        }
                        else
                        {
                            arr[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function print(arr)
{
    var start = 97;
    var end = 106;
    for (i = start; i < end; i++)
    {
        var x = (String.fromCharCode(i)).toString();
        for (j = start; j < end; j++)
        {
            var y = (String.fromCharCode(j)).toString();
            var z = (x.concat(y)).toString();
            document.getElementById(z.toString()).value = arr[i - 97][j - 97];
        }
    }
}

function onlyfuns()
{
    if (!check())
    {
        alert("Wrong no.");
        return;
    }
    var arr = input();
    if (!valid(arr))
    {
        alert("Clashing nos.");
        return;
    }
    if (!solve(arr))
    {
        alert("Couldn't Solve");
        return;
    }
    print(arr);
}
