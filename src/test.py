import copy




# tangerine = [1,1,2,3,4,4,4]

COUNT = 100000

def recall(goal, diffenece, current_list:list, next_i, orginal_list: list, recursion, min_):
    
    for i in range(next_i, len(orginal_list)):
        temp_current_list = copy.deepcopy(current_list)
        if len(temp_current_list) + len(orginal_list[i]) >= goal:
            temp_current_list.extend(orginal_list[i])
            print(temp_current_list)
            sorted_set = sorted(set(temp_current_list), reverse=True)
            temp_difference = 0
            for j in range(0, len(sorted_set)):
                try:
                    print(sorted_set)
                    temp_difference += sorted_set[j] - sorted_set[j+1]
                except:
                    pass
            if temp_difference <= diffenece:
                diffenece = temp_difference
                global COUNT 
                if diffenece <= COUNT:
                    # COUNT = diffenece
                    COUNT = len(sorted_set)
                    print("최솟값!", sorted_set, diffenece, )
                    print("개수!", sorted_set, len(sorted_set))
                if recursion or i == len(orginal_list):
                    return min_
        else:
            temp_current_list.extend(orginal_list[i])
            recall(goal, diffenece, temp_current_list, i+1, orginal_list, True,min_)
    return min_

        

def solution(k, tangerine:list):


    tangerine.sort()
    flag = False
    flag_i = 0
    list_ =[]
    for i,v in enumerate(tangerine):
        temp_list = []
        n_i = i
        if flag:
            n_i = flag_i
        if not(len(tangerine) -1 == n_i):
            for j in range(n_i, len(tangerine)):
                if v == tangerine[j]:
                    temp_list.append(v)
                    flag_i = j
                else:
                    flag = True
                    flag_i = j
                    break
            if len(temp_list) > 0:
                list_.append(temp_list)
    print(list_)
    min_ = 100000
    answer = recall(k, 10000, [], 0, list_, False, min_)


    answer = COUNT
    return answer
# tangerine = [1, 1, 1, 2, 3, 4, 5]
tangerine = [1,1,1,10,11,11,12,12]
print(solution(5, tangerine))
# tangerine = [1, 3, 2, 5, 4, 5, 2, 3]
# solution(4, tangerine)
# tangerine = [1, 1, 1, 1, 2, 2, 2, 3]
# solution(2, tangerine)
