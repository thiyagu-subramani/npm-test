class Searching {
    public b: number;
    constructor(b1: number) {
        this.b = b1;
    }
    search(a: number[]) {
        var c: number = this.b;
        var count: number = 0;
        var l = 0;
        var h = a.length - 1;
        if (a.length == 0) {
            return "empty";
        }
        while (l < h) {
            var mid = Math.floor((l + h) / 2);
            // alert(mid)
            if (c == a[mid]) {
                count = 1;
                break;

            } else if (c < a[mid]) {
                h = mid - 1;
            }
            else
                l = mid + 1;
        }

        if (count == 1) {
            return "number is found";
        }
        else
            return "number is not found";
    }
}

