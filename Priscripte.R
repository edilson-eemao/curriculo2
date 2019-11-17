
is.numeric(X)
X
x <- (1, 2, 3)
str(x)

length(x)
m1 <- matrix(c(2, 4, 3, 1, 5, 7), nrow=2, ncol=3)
m2 <- matrix(c(2, 4, 3, 1, 5, 7), nrow=2, ncol=3, byrow=T)
dim(m1)
exp(720)
exp(72)
exp(709)
0.3-0.1==0.2
0.2-(0.3-0.1)
print(0.3-0.1, digits=17)
.machine
.Machine
0.3-0.1

x <- seq(-5, 5, by=1000)
exp(1)
x <- seq(-5, 5, length.out=1000)
f<- function(a){
  y=(a-1)^2
  return(y)
}
plot(x,f(x),
     main="meu primeiro gráfico", 
     xlab="eixo x", 
     type="l",
     xlim=c(-5, 5),
     ylim=c(-10, 10),
     col = "blue",
     )
lines(x, g(x), col="red")
abline(h=-1)
abline(v=0)

g <- function(a){a^3}

data("iris")
table(iris$Species)
hist(iris$Sepal.Length)
pie(table(iris$Sepal.Length))

plot(iris$Petal.Length,type="l")

tab2_1 <- read.csv2("C:/Users/Ana Paula/Desktop/Edilson Mestrado/arq1latex/CompanhiaMB_clear.txt", encoding="UTF-8", sep="")
head(tab2_1)
ni<-table(tab2_1$Grau) # Calcula a tabela de frequências absolutas e armazena o resultado em 'mytab'
fi<-prop.table(ni) # Tabela de frequências relativas (f_i)
p_fi<-100*prop.table(ni) # Porcentagem (100 f_i)

# Adiciona linhas de total
ni<-c(ni,sum(ni)) 
fi<-c(fi,sum(fi))
p_fi<-c(p_fi,sum(p_fi))
names(ni)[4]<-"Total"
