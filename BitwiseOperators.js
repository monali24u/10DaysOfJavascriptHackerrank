function getMaxLessThanK(n, k) {
    var max = 0;
    var maxsum;

    for(var b = 1; b<=n; b++)
        {
            for(var a = 1; a<b; a++)
                {
                    maxsum = a & b;

                    if(maxsum < k)
                        {
                            if(maxsum > max)
                                {
                                    max = maxsum;
                                }
                        }
                }
        }

    return max;
}
