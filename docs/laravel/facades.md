# Facades

## 创建服务 PostsService
我们可以创建一个非常简单的服务文件
可以创建目录 `app\Posts`, 新建文件 `PostsService.php`
```php
namespace App\Posts;

class PostsService
{
    public function list()
    {
        response([
            __FILE__,
            __LINE__
        ])->send();
    }
}
```

## 注册服务
在 `AppServiceProvider` 注册服务，也可以使用自己定义的 `ServiceProvider`
```php
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('posts', function ($app) {
            return new PostsService();
        });
```

## 创建 Facades 文件
可以创建目录 `app\Posts`, 新建文件 `Posts.php`
```php
namespace App\Posts;

class Posts
{

    protected static function resolveFacade($name)
    {
        return app()[$name];
    }

    public static function __callStatic($method, $arguments)
    {
        return (self::resolveFacade('posts'))
            ->$method(...$arguments);
    }
}
```

## 测试
在 `routes\web.php` 里新增 路由
```php
use App\Posts\Posts;
Route::get('/posts', function () {
    Posts::list();
});
```